package com.example.fitnessserverapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.*;

// Annotations
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "posts")
//@Configuration
//@EnableMongoAuditing

public class Post {

    @Id
    private String id;

    private String userId;
    private String username;
    private String title;
    private String content;
    private List<String> postImages;
    private List<Comment> comments = new ArrayList<>();
    private List<String> likes = new ArrayList<>();
    private boolean published;

    @CreatedDate
    private LocalDateTime created;

    @LastModifiedDate
    private LocalDateTime modified;

    public Post(String userId, String username, String title, String content, boolean published) {
        this.userId = userId;
        this.username = username;
        this.title = title;
        this.content = content;
        this.published = published;
    }

    public Post(String userId, String username, String title, String content, List<String> postImages, boolean published) {
        this.userId = userId;
        this.username = username;
        this.title = title;
        this.content = content;
        this.postImages = postImages;
        this.published = published;
    }

    public void removeCommentById(String commentId) {
        // Using an iterator to remove a comment by its ID
        Iterator<Comment> iterator = comments.iterator();
        while (iterator.hasNext()) {
            Comment comment = iterator.next();
            if (comment.getCommentId().equals(commentId)) {
                iterator.remove(); // Removes the current comment from the list
                break;
            }
        }
    }

}
