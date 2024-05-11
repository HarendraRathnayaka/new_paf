package com.example.fitnessserverapi.controller;

import com.example.fitnessserverapi.model.Comment;
import com.example.fitnessserverapi.model.Post;
import com.example.fitnessserverapi.repository.CommentRepository;
import com.example.fitnessserverapi.repository.PostRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api")
public class CommentController {

    @Autowired
    PostRepository postRepository;
    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/{postId}/comments")
    public ResponseEntity<Post> addComment(@PathVariable String postId, @RequestBody Comment comment) {
        Optional<Post> post = postRepository.findById(postId);

        if (post.isPresent()) {
            Post _post = post.get();

            ObjectId objectId = new ObjectId();
            String objectIdString = objectId.toHexString();

            comment.setCommentId(objectIdString);
            comment.setCreatedAt(LocalDateTime.now());
            comment.setModifiedAt(LocalDateTime.now());
            _post.getComments().add(comment);
            Post updatedPost = postRepository.save(_post);

            return ResponseEntity.ok(updatedPost);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{postId}/{commentId}/comments")
    public ResponseEntity<Post> updateComment(@PathVariable String postId,
                                                 @PathVariable String commentId,
                                              @RequestBody Comment comment) {

        Optional<Post> postData = postRepository.findById(postId);

        if (postData.isPresent()) {
            Post _post = postData.get();
            List<Comment> _comment = _post.getComments();
            _comment.forEach(val -> {
                if (commentId.equals(val.getCommentId())) {
                    val.setComment(comment.getComment());
                }
            });
            System.out.println(_post.getComments());

            Post updatedPost = postRepository.save(_post);
            return ResponseEntity.ok(updatedPost);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{postId}/comments")
    public ResponseEntity<List<Comment>> getCommentsByPost(@PathVariable String postId) {
        Optional<Post> post = postRepository.findById(postId);

        if (post.isPresent()) {
            Post _post = post.get();
            return ResponseEntity.ok(_post.getComments());
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/comments/{postId}/{commentId}")
    public ResponseEntity<Object> deleteTutorial(@PathVariable("postId") String postId,
                                                 @PathVariable("commentId") String commentId) {
        try {
            Optional<Post> post = postRepository.findById(postId);
            if (post.isPresent()) {
                Post _post = post.get();
                List<Comment> _comment = _post.getComments();
//                List<Comment> _newComment = new ArrayList<>();
                System.out.println(_comment.size());
                _post.removeCommentById(commentId);
                System.out.println(_post.getComments().size());

                Post updatedPost = postRepository.save(_post);

                Map<String, Object> response = new HashMap<>();
                response.put("message", "Comment with ID: "+postId+" Deleted successfully!");
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }


        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
