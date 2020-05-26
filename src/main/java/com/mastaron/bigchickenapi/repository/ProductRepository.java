package com.mastaron.bigchickenapi.repository;

import com.mastaron.bigchickenapi.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    Product findByName(String name);
}
