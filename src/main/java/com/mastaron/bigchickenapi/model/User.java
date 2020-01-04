package com.mastaron.bigchickenapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Generated;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class User extends AbstractEntity {

    @Column(unique = true)
    @NotBlank
    @JsonIgnore
    private String uid;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}
