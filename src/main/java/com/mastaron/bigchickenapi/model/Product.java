package com.mastaron.bigchickenapi.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Product extends EntityWithImage {

    @NotBlank
    @Column(unique = true)
    private String name;

    @ManyToOne
    ProductCategory category;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
