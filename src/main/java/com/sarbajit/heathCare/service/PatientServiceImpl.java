package com.sarbajit.heathCare.service;

import com.sarbajit.heathCare.entity.Patient;
import com.sarbajit.heathCare.repository.PatientRepository;
import jakarta.validation.constraints.Null;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
//@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
    @Autowired
    public PatientRepository patientRepository;

    @Override
    public List<Patient> getPatient() {
        return patientRepository.findAll();
    }

    @Override
    public Patient postPatient(Patient data) {
//        data.setFullName();
        if (data.getPatientId() == null) {
            return patientRepository.save(data);
        } else {
            Patient existingPatient = patientRepository.findById(data.getPatientId()).get();

            existingPatient.setFirstName(data.getFirstName());
            existingPatient.setMiddleName(data.getMiddleName());
            existingPatient.setLastName(data.getLastName());
            existingPatient.setAadharNumber(data.getAadharNumber());
            existingPatient.setPhone(data.getPhone());
            existingPatient.setEmail(data.getEmail());
            existingPatient.setGender(data.getGender());
            existingPatient.setDob(data.getDob());
            existingPatient.setHouse(data.getHouse());
            existingPatient.setVillage(data.getVillage());
            existingPatient.setSubDivision(data.getSubDivision());
            existingPatient.setPoliceStation(data.getPoliceStation());
            existingPatient.setDistrict(data.getDistrict());
            existingPatient.setState(data.getState());
            existingPatient.setCoName(data.getCoName());
            existingPatient.setEmergencyPhone(data.getEmergencyPhone());
            existingPatient.setCreatedOn(data.getCreatedOn());

//            existingPatient.setFullName();

            patientRepository.save(existingPatient);
            return existingPatient;
        }
    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).get();
    }

    @Override
    public void softDeleteById(Long id) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id " + id));
        existingPatient.setDeleteStatus(1); // mark as deleted
        patientRepository.save(existingPatient);
    }

    @Override
    public List<Patient> search(String keyword) {
        return patientRepository.search(keyword);
    }

    @Override
    public List<Patient> getPatientDateFilter(Date fromDate, Date toDate) {
        return patientRepository.getPatientDateFilter(fromDate,toDate);
    }
}
