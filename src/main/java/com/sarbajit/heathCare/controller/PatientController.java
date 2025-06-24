package com.sarbajit.heathCare.controller;

import com.sarbajit.heathCare.entity.Patient;
import com.sarbajit.heathCare.service.PatientService;
import com.sarbajit.heathCare.service.PatientServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor

public class PatientController {
    public final PatientService patientService;

    @GetMapping("/patient")
    public List<Patient> getPatient(){

        return patientService.getPatient();
    }

    @PostMapping("/patient")
    public Patient postPatient(@RequestBody Patient data){
        return patientService.postPatient(data);
    }

}
