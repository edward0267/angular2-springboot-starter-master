package com.artp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.web.bind.annotation.RestController
public class RestController {

  @RequestMapping(path = "/helloworld1", method = RequestMethod.GET)
  public String helloWorld()
  {
    return "hello world";
  }


}
