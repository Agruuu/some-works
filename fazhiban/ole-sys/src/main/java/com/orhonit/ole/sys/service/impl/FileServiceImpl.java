package com.orhonit.ole.sys.service.impl;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.orhonit.ole.common.utils.FileUtil;
import com.orhonit.ole.sys.dao.FileInfoDao;
import com.orhonit.ole.sys.model.FileInfo;
import com.orhonit.ole.sys.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "adminLogger")
@Service
public class FileServiceImpl implements FileService {

	@Value("${files.path}")
	private String filesPath;
	@Autowired
	private FileInfoDao fileInfoDao;

	@Override
	public FileInfo save(MultipartFile file) throws IOException {
		String fileOrigName = file.getOriginalFilename();
		if (!fileOrigName.contains(".")) {
			throw new IllegalArgumentException("缺少后缀名");
		}

		String md5 = FileUtil.fileMd5(file.getInputStream());
		FileInfo fileInfo = fileInfoDao.getById(md5);
		if (fileInfo != null) {
			fileInfoDao.update(fileInfo);
			return fileInfo;
		}

		fileOrigName = fileOrigName.substring(fileOrigName.lastIndexOf("."));
		String pathname = FileUtil.getPath() + md5 + fileOrigName;
		String fullPath = filesPath + pathname;
		FileUtil.saveFile(file, fullPath);

		long size = file.getSize();
		String contentType = file.getContentType();

		fileInfo = new FileInfo();
		fileInfo.setId(md5);
		fileInfo.setContentType(contentType);
		fileInfo.setSize(size);
		fileInfo.setPath(fullPath);
		fileInfo.setUrl(pathname);
		fileInfo.setType(contentType.startsWith("image/") ? 1 : 0);

		fileInfoDao.save(fileInfo);

		log.debug("上传文件{}", fullPath);

		return fileInfo;

	}

	@Override
	public void delete(String id) {
		FileInfo fileInfo = fileInfoDao.getById(id);
		if (fileInfo != null) {
			String fullPath = fileInfo.getPath();
			FileUtil.deleteFile(fullPath);

			fileInfoDao.delete(id);
			log.debug("删除文件：{}", fileInfo.getPath());
		}
	}

}
