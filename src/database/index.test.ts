import { Pool } from 'pg';
import express, { Request, Response } from 'express';
import db from './index';


describe('Database Connection', () => {
    it('should connect to the database successfully', () => {
      expect(db).toBeInstanceOf(Pool);
    });
  
    it('should handle database connection errors', () => {
      const errorSpy = jest.spyOn(console, 'error');
      db.emit('error', new Error('Database connection error'));
      expect(errorSpy).toHaveBeenCalled();
    });
  });