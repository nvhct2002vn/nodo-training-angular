package com.example.nodo.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorMessage {

    private String code;
    private String message;
    private Date timestamp;
}
