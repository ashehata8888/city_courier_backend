// import { Request, Response, NextFunction } from 'express';
// import UserModel from '../models/user.model';
// import {
//   createUser,
//   getOneUser,
//   getAllUsers,
//   updateUser,
//   deleteUser,
//   authenticate
// } from './users.handlers';
// import User from '../types/user.type';
// const mockUser: User = {
//     id: 1,
//     user_name: 'testUser',
//     password: 'testPassword',
//     address: '123 Main St',
//     user_mail: 'test@example.com',
//     privilege:'sender', 
//     status:'active'
//   };
  
//   const mockRequestBody = {
//     user_name: 'testUser',
//     password: 'testPassword',
//     address: '123 Main St',
//     user_mail: 'test@example.com',
//     privilege:'sender', 
//     status:'active'
//   };

  

// describe('users.handlers', () => {
//   let req: Request;
//   let res: Response;
//   let next: NextFunction;
//   let userModel: UserModel;

//   beforeEach(() => {
//     req = {} as Request;
//     res = {
//         json: jest.fn(),
//         status: jest.fn().mockReturnThis()
//     } as unknown as Response;
//     next = jest.fn() as NextFunction;
//     userModel = new UserModel();
//   });

//   describe('createUser', () => {
//     it('should create a user and send the response', async () => {

//       jest.spyOn(userModel, 'createUser').mockResolvedValue(mockUser);

//       await createUser(req, res, next);

//       expect(res.json).toHaveBeenCalledWith({
//         Message: ` User "${mockUser.user_name}" was created successfully`,
//         data: { ...mockUser }
//       });
//       expect(next).not.toHaveBeenCalled();
//     });

    
//   });

//   describe('getOneUser', () => {
//     it('should retrieve a user and send the response', async () => {
//       const mockRequestId = '1';
//       req.params = { id: mockRequestId };
//       jest.spyOn(userModel, 'getOneUser').mockResolvedValue(mockUser);

//       await getOneUser(req, res, next);

//       expect(res.json).toHaveBeenCalledWith({
//         Message: ` User "${mockUser.user_name}" was retrieved successfully`,
//         data: { ...mockUser }
//       });
//       expect(next).not.toHaveBeenCalled();
//     });

  
//   });

//   describe('getAllUsers', () => {
//     it('should retrieve all users and send the response', async () => {
//       jest.spyOn(userModel, 'getAllUsers').mockResolvedValue([mockUser]);

//       await getAllUsers(req, res, next);

//       expect(res.json).toHaveBeenCalledWith({
//         Message: ` the Users were retrieved successfully`,
//         data: { ...mockUser }
//       });
//       expect(next).not.toHaveBeenCalled();
//     });


//   });

//   describe('updateUser', () => {
//     it('should update a user and send the response', async () => {


//       jest.spyOn(userModel, 'updateUser').mockResolvedValue(mockUser);

//       await updateUser(req, res, next);

//       expect(res.json).toHaveBeenCalledWith({
//         Message: ` the User Name "${mockUser.user_name}" was updated successfully`,
//         data: { ...mockUser }
//       });
//       expect(next).not.toHaveBeenCalled();
//     });


//   });

//   describe('deleteUser', () => {
//     it('should delete a user and send the response', async () => {

//       const mockRequestId = '1';
//       req.params = { id: mockRequestId };
//       jest.spyOn(userModel, 'deleteUser').mockResolvedValue(mockUser);

//       await deleteUser(req, res, next);

//       expect(res.json).toHaveBeenCalledWith({
//         Message: ` User Name "${mockUser.user_name}" was deleted successfully`,
//         data: { ...mockUser }
//       });
//       expect(next).not.toHaveBeenCalled();
//     });

    
//   });

//   describe('authenticate', () => {
//     it('should authenticate a user and send the response with a token', async () => {

//       const mockRequestBody = { user_name: 'emma.wagner', password: '321' };
//       jest.spyOn(userModel, 'authenticate').mockResolvedValue(mockUser);

//       await authenticate(req, res, next);

//       expect(res.json).toHaveBeenCalledWith({
//         data: { ...mockUser, token: expect.any(String) },
//         message: 'user passed the authentication successfully'
//       });
//       expect(next).not.toHaveBeenCalled();
//     });

//     it('should send an error response if authentication fails', async () => {
//       const mockRequestBody = { user_name: 'testUser', password: 'testPassword' };
//       jest.spyOn(userModel, 'authenticate').mockResolvedValue(null);

//       await authenticate(req, res, next);

//       expect(res.status).toHaveBeenCalledWith(401);
//       expect(res.json).toHaveBeenCalledWith({
//         message: 'User Name or Password is not correct'
//       });
//       expect(next).not.toHaveBeenCalled();
//     });

    
//   });
// });
