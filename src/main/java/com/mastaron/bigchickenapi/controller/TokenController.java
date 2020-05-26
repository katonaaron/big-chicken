package com.mastaron.bigchickenapi.controller;

import com.google.firebase.auth.FirebaseAuthException;
import com.mastaron.bigchickenapi.FirebaseUtil;
import com.mastaron.bigchickenapi.model.FirebaseToken;
import com.mastaron.bigchickenapi.model.User;
import com.mastaron.bigchickenapi.repository.UserRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController {
    UserRepository userRepository;

    public TokenController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/token")
    public User getUserByIdToken(@RequestBody FirebaseToken firebaseToken) {
        String uid;
        try {
            uid = FirebaseUtil.getUidFromIdToken(firebaseToken.getToken());
        } catch (FirebaseAuthException e) {
            throw new ResourceNotFoundException("Invalid token");
        }
        User user = userRepository.findByUid(uid);
        if (user == null)
            throw new ResourceNotFoundException("User was not found");
        return user;
    }

    @PostMapping("/token")
    public User createToken(@RequestBody FirebaseToken firebaseToken) {
        String uid;
        try {
            uid = FirebaseUtil.getUidFromIdToken(firebaseToken.getToken());
        } catch (FirebaseAuthException e) {
            throw new ResourceNotFoundException("Invalid token");
        }

        User user;
        if (userRepository.existsByUid(uid)) {
            user = userRepository.findByUid(uid);
            if (user == null)
                throw new ResourceNotFoundException("User could not be retrieved");
        } else {
            user = new User();
            user.setUid(uid);
            user = userRepository.save(user);
        }
        return user;
    }
}
