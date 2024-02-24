package com.dietify.v1.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import com.dietify.v1.DTO.Formdata;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@Controller
public class FormController {
    

    @GetMapping("/formpage")
    public String formpage(Model model) {
        model.addAttribute("formdata", new Formdata());
        return "surveyform";
    }

    @PostMapping("/submitform")
    public String postMethodName(@ModelAttribute("formdata")Formdata formdata,Model model) {
        model.addAttribute("formdata", formdata);
      //accessing the data from jsp page
        return "mock";
    }
    
    
}
