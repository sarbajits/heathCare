package com.sarbajit.heathCare.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Where;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Where(clause = "delete_status = 0")
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
    private LocalDate dob;
    private String house;
    private String village;
    private String subDivision;
    private String policeStation;
    private String district;
    private String state;
    private String coName;
    private Long emergencyPhone;

    @Column(columnDefinition = "int default 0", name = "delete_status")
    private Integer deleteStatus = 0;

    private Date createdOn;

//    private String fullName;

//    public String getFullName() {
//        return firstName+" "+(Objects.equals(middleName, "") ? "" : middleName + " ")+lastName;
//    }

//    public void setFullName() {
//        this.fullName = (firstName == null ? "" : firstName + " ")
//                + (Objects.equals(middleName, "") ? "" : middleName + " ")
//                + (lastName == null ? "" : lastName);
//    }
}