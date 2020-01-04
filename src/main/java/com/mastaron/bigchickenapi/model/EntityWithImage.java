package com.mastaron.bigchickenapi.model;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class EntityWithImage extends AbstractEntity {
    private String imagePath;

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}
