package com.mastaron.bigchickenapi.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Set;

@Entity
@Data
public class ProductCategory extends EntityWithImage {
    @NotBlank
    @Column(unique = true)
    private String name;

    @OneToMany(mappedBy = "category")
    Set<Product> products;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
