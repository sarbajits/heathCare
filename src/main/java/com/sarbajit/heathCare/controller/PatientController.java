package com.sarbajit.heathCare.controller;

import com.sarbajit.heathCare.entity.Patient;
import com.sarbajit.heathCare.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:5500")
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

    @GetMapping("/patient/{id}")
    public Patient getPatientById(@PathVariable Long id){
        return patientService.getPatientById(id);
    }

    @PatchMapping("/patient/{id}")
    public Patient patchPatientById(@PathVariable Long id, @RequestBody Map<String, Object> data) {
        Patient existingPatient = patientService.getPatientById(id);

        data.forEach((key, value) -> {
            switch (key) {
                case "firstName":
                    existingPatient.setFirstName((String) value);
                    break;
                case "middleName":
                    existingPatient.setMiddleName((String) value);
                    break;
                case "lastName":
                    existingPatient.setLastName((String) value);
                    break;
                case "aadharNumber":
                    existingPatient.setAadharNumber(Long.valueOf(value.toString()));
                    break;
                case "phone":
                    existingPatient.setPhone(Long.valueOf(value.toString()));
                    break;
                case "email":
                    existingPatient.setEmail((String) value);
                    break;
                case "gender":
                    existingPatient.setGender((String) value);
                    break;
                case "dob":
                    try {
                        String dateStr = value.toString();
                        // Customize format as needed
                        DateTimeFormatter formatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME;
                        LocalDate date = OffsetDateTime.parse(dateStr, formatter).toLocalDate();
                        existingPatient.setDob(Date.from(date.atStartOfDay(ZoneId.systemDefault()).toInstant()));
                    } catch (Exception e) {
                        throw new RuntimeException("Invalid date format for dob");
                    }
                    break;
                case "house":
                    existingPatient.setHouse((String) value);
                    break;
                case "village":
                    existingPatient.setVillage((String) value);
                    break;
                case "subDivision":
                    existingPatient.setSubDivision((String) value);
                    break;
                case "policeStation":
                    existingPatient.setPoliceStation((String) value);
                    break;
                case "district":
                    existingPatient.setDistrict((String) value);
                    break;
                case "state":
                    existingPatient.setState((String) value);
                    break;
                case "coName":
                    existingPatient.setCoName((String) value);
                    break;
                case "emergencyPhone":
                    existingPatient.setEmergencyPhone(Long.valueOf(value.toString()));
                    break;
            }
        });

        return patientService.postPatient(existingPatient);
    }

}
