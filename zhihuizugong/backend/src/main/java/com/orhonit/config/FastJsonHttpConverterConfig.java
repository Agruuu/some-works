package com.orhonit.config;

import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;

@Configuration
public class FastJsonHttpConverterConfig {
	
	/*
	 * @Bean public HttpMessageConverters fastJsonHttpMessageConverter(){
	 * FastJsonHttpMessageConverter fastConverter = new
	 * FastJsonHttpMessageConverter(); FastJsonConfig fastJsonConfig = new
	 * FastJsonConfig();
	 * fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat); //
	 * 2:添加fastJson的配置信息; fastJsonConfig.setSerializerFeatures(
	 * SerializerFeature.PrettyFormat,
	 * SerializerFeature.DisableCircularReferenceDetect,
	 * SerializerFeature.WriteMapNullValue,
	 * SerializerFeature.WriteNullStringAsEmpty,
	 * SerializerFeature.WriteNullListAsEmpty); // 3处理中文乱码问题 // List<MediaType>
	 * fastMediaTypes = new ArrayList<>(); //
	 * fastMediaTypes.add(MediaType.APPLICATION_JSON_UTF8);
	 * fastConverter.setFastJsonConfig(fastJsonConfig); HttpMessageConverter<?>
	 * converter = fastConverter; return new HttpMessageConverters(converter); }
	 */

}
