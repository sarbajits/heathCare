package com.sarbajit.heathCare.repository;

import com.sarbajit.heathCare.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

//    @Query("SELECT p FROM Patient p WHERE LOWER(p.firstName) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
//            "OR LOWER(p.middleName) LIKE LOWER(CONCAT('%', :keyword, '%'))"+
//            "OR LOWER(p.lastName) LIKE LOWER(CONCAT('%', :keyword, '%'))"+
//            "OR LOWER(p.firstName) LIKE LOWER(CONCAT('%', :keyword, '%'))"+
//            "OR LOWER(p.email) LIKE LOWER(CONCAT('%', :keyword, '%'))")

    @Query("SELECT p FROM Patient p WHERE " +
            "LOWER(CONCAT(p.firstName, ' ', COALESCE(p.middleName, ''), ' ', p.lastName)) " +
            "LIKE LOWER(CONCAT('%', :keyword, '%'))" +
            "OR LOWER(p.email) LIKE LOWER(CONCAT('%', :keyword, '%'))" +
            "OR STR(p.phone) LIKE CONCAT('%', :keyword, '%')"
    )
    public List<Patient> search(@Param("keyword") String keyword);


    @Query("SELECT p FROM Patient p WHERE p.createdOn>= :fromDate AND p.createdOn<= :toDate")
    List<Patient> getPatientDateFilter(
            @Param("fromDate") Date startDate,
            @Param("toDate") Date endDate);

}
