package com.example.nodo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(TotalBookException.class)
    public ResponseEntity<?> handlerTotalBookException(TotalBookException exception) {
        ErrorMessage errorMessage = new ErrorMessage("Max", exception.getMessage(), new Date());
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(TongNhoHoDangMuonException.class)
    public ResponseEntity<?> handlerTongNhoHoDangMuonException(TongNhoHoDangMuonException exception) {
        ErrorMessage errorMessage = new ErrorMessage("TotalVsTotalBorrow", exception.getMessage(), new Date());
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler(BeforeDateException.class)
    public ResponseEntity<?> handlerBeforeDateException(BeforeDateException exception) {
        ErrorMessage errorMessage = new ErrorMessage("BeforeDate", exception.getMessage(), new Date());
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

//    @ExceptionHandler(IsDeleteException.class)
//    public ResponseEntity<?> deleteException(IsDeleteException exception) {
//        ErrorMessage errorMessage = new ErrorMessage("deleteSuccess", exception.getMessage(), new Date());
//        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
//    }

}
