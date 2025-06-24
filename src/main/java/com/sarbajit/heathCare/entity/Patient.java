package com.sarbajit.heathCare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long patientId;
    private String firstName;
    private String middleName;
    private String lastName;
    private Long aadharNumber;
    private Long phone;
    private String email;
    private String gender;
    private Date dob;
    private String house;
    private String village;
    private String subDivision;
    private String policeStation;
    private String district;
    private String state;
    private String coName;
    private Long emergencyPhone;
}