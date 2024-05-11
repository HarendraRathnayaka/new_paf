//package com.example.fitnessserverapi;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@EnableWebMvc
//public class MvcConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:5173")  // Your frontend origin
//                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allowed HTTP methods
//                .allowedHeaders("*")  // Allowed headers (optional)
//                .allowCredentials(true);  // Whether to allow cookies/credentials (if needed)
//    }
//}
