package com.mastaron.bigchickenapi.repository;

import com.mastaron.bigchickenapi.model.ShoppingCartItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ShoppingCartItemRepository extends PagingAndSortingRepository<ShoppingCartItem, Long> {
}
