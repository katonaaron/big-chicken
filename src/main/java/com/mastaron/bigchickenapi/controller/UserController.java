package com.mastaron.bigchickenapi.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.mastaron.bigchickenapi.FirebaseUtil;
import com.mastaron.bigchickenapi.model.User;
import com.mastaron.bigchickenapi.repository.UserRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users/idToken/{idToken}")
    public User getUserByIdToken(@PathVariable String idToken) {
        String uid = null;
        try {
            uid = FirebaseUtil.getUidFromIdToken(idToken);
        } catch (FirebaseAuthException e) {
            throw new ResourceNotFoundException("Invalid token");
        }
        User user = userRepository.findByUid(uid);
        if(user == null)
            throw new ResourceNotFoundException("User was not found");
        return user;
    }

    @PutMapping("/users/idToken/{idToken}")
    public User createOrFetchUserFromByToken(@PathVariable String idToken){
        String uid = null;
        try {
            uid = FirebaseUtil.getUidFromIdToken(idToken);
        } catch (FirebaseAuthException e) {
            throw new ResourceNotFoundException("Invalid token");
        }

        User user = null;
        if(userRepository.existsByUid(uid)) {
            user = userRepository.findByUid(uid);
            if(user == null)
                throw new ResourceNotFoundException("User was not found");
        } else {
            user = new User();
            user.setUid(uid);
            user = userRepository.save(user);
        }
        return user;
    }
}
