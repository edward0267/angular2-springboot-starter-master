package com.artp.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

  @RequestMapping(path = "/helloworld", method = RequestMethod.GET)
  public String helloWolrld() {
    return "hello world";
  }


  @RequestMapping(path = "/hellohell", method = RequestMethod.GET)
  public String helloHell() {
    return "hello hell";
  }

}
