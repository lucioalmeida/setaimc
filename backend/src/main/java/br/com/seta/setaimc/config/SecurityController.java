package br.com.seta.setaimc.config;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class SecurityController {

    @RequestMapping(value = "/api/profile", method = RequestMethod.GET)
    @ResponseBody
    public Object currentUserName(Principal principal) {
        return principal;
    }
}