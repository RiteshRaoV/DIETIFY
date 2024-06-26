package com.dietify.v1.Entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private String email;

	private String password;

	private String resetToken;

	private LocalDateTime passwordResetTokenDateTime;

	private LocalDateTime verificationTokenDateTime;

	private boolean verificationStatus;

	private String role;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Blog> blogs = new ArrayList<>();

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Favourite> favourites = new ArrayList<>();

	public int getId() {
		return id;
	}

	public String getRole() {
		return role;
	}

	public LocalDateTime getPasswordResetTokenDateTime() {
		return passwordResetTokenDateTime;
	}

	public void setPasswordResetTokenDateTime(LocalDateTime passwordResetTokenDateTime) {
		this.passwordResetTokenDateTime = passwordResetTokenDateTime;
	}

	public LocalDateTime getVerificationTokenDateTime() {
		return verificationTokenDateTime;
	}

	public void setVerificationTokenDateTime(LocalDateTime verificationTokenDateTime) {
		this.verificationTokenDateTime = verificationTokenDateTime;
	}

	public boolean isVerificationStatus() {
		return verificationStatus;
	}

	public void setVerificationStatus(boolean verificationStatus) {
		this.verificationStatus = verificationStatus;
	}

	public List<Favourite> getFavourites() {
		return favourites;
	}

	public void setFavourites(List<Favourite> favourites) {
		this.favourites = favourites;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getResetToken() {
		return resetToken;
	}

	public void setResetToken(String resetToken) {
		this.resetToken = resetToken;
	}

	public List<Blog> getBlogs() {
		return blogs;
	}

	public void setBlogs(List<Blog> blogs) {
		this.blogs = blogs;
	}
}