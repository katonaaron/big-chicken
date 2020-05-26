package com.mastaron.bigchickenapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import java.util.Set;

@Entity
public class User extends AbstractEntity {

    @Column(unique = true)
    @NotBlank
    @JsonIgnore
    private String uid;

    @OneToMany(mappedBy = "user")
    Set<ShoppingCartItem> shoppingCart;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}
