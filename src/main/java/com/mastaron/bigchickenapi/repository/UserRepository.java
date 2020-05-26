package com.mastaron.bigchickenapi.repository;

import com.mastaron.bigchickenapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    @RestResource(exported = false)
    User findByUid(String uid);

    @RestResource(exported = false)
    boolean existsByUid(String uid);
}
