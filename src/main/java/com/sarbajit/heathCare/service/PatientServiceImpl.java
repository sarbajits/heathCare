package com.sarbajit.heathCare.service;

import com.sarbajit.heathCare.entity.Patient;
import com.sarbajit.heathCare.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
//@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
    @Autowired
    public  PatientRepository patientRepository;

    @Override
    public List<Patient> getPatient() {
        return patientRepository.findAll();
    }

    @Override
    public Patient postPatient(Patient data) {
        return patientRepository.save(data);


    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).get();
    }
}
