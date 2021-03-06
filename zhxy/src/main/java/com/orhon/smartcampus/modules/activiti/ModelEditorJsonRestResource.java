package com.orhon.smartcampus.modules.activiti;

import com.orhon.smartcampus.modules.core.annotation.DisableConverter;
import org.activiti.engine.ActivitiException;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.repository.Model;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * 获取model的节点信息，编辑器根据返回的json进行绘图
 * liuzhize 2019年3月7日下午3:29:15
 */
@RestController
@RequestMapping("service")
public class ModelEditorJsonRestResource  {

	final String MODEL_ID = "modelId";
	final String MODEL_NAME = "name";
	final String MODEL_REVISION = "revision";
	final String MODEL_DESCRIPTION = "description";

	protected static final Logger LOGGER = LoggerFactory.getLogger(ModelEditorJsonRestResource.class);

	@Autowired
	private RepositoryService repositoryService;

	@Autowired
	private ObjectMapper objectMapper;
	/**
	 * 获取流程json信息
	 * @param modelId
	 * @return
	 * @throws JsonProcessingException 
	 */
	@SuppressWarnings("deprecation")
	@RequestMapping(value="/model/{modelId}/json",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	public String getEditorJson(@PathVariable String modelId) throws JsonProcessingException {
		ObjectNode modelNode = null;
		Model model = repositoryService.getModel(modelId);
		if (model != null) {
			try {
				if (StringUtils.isNotEmpty(model.getMetaInfo())) {
					modelNode = (ObjectNode) objectMapper.readTree(model.getMetaInfo());
				} else {
					JsonFactory jsonFactory = objectMapper.getJsonFactory();
					modelNode = objectMapper.createObjectNode();
					modelNode.put(MODEL_NAME, model.getName());
				}
				modelNode.put(MODEL_ID, model.getId());
				ObjectNode editorJsonNode = (ObjectNode) objectMapper.readTree(
						new String(repositoryService.getModelEditorSource(model.getId()), "utf-8"));
				modelNode.put("model", editorJsonNode);
			} catch (Exception e) {
				LOGGER.error("Error creating model JSON", e);
				throw new ActivitiException("Error creating model JSON", e);
			}
		}
		String string = modelNode.toString();
		Object parse = JSON.parse(string);
		Object json = JSON.toJSON(parse);
		return string;
	}
}
