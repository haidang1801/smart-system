package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "van_dong")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VanDong {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
	private String action;
	private String type;
	private Integer point;
}
