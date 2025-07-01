package com.sarbajit.heathCare.service;

import com.sarbajit.heathCare.entity.Patient;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface PatientService {

    public List<Patient> getPatient();

    public Patient postPatient(Patient data);

    public Patient getPatientById(Long id);

    public void softDeleteById(Long id);

    public List<Patient> search(String keyword);

    public List<Patient> getPatientDateFilter(Date fromDate, Date toDate);
}