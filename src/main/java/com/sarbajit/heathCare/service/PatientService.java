package com.sarbajit.heathCare.service;

import com.sarbajit.heathCare.entity.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PatientService {

    public List<Patient> getPatient();

    public Patient postPatient(Patient data);
}