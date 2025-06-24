import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { USERS } from './mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController; // use this to formulate the data

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),              // Provides actual HttpClient (need this and below)
        provideHttpClientTesting(),       // Sets up testing backend (need this and above)
      ]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {                           // 1) make call 2) subscribe to see data inside 3) test data inside 4) test actual http call 5) verify
    service.getAllUsers().subscribe((users: any) => {          // 1) 2)
      expect(users).toBeTruthy();                              // 3)
      expect(users.length).toBe(3);

      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe("Ron Weasley");
    });
    
    const mockReq = testingController.expectOne('api/users');  // 4)
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));
  });

  it('should get user by id', () => {                           // 1) make call 2) subscribe to see data inside 3) test data inside 4) test actual http call 5) verify
    service.getUserById(1).subscribe((user: any) => {           // 1) 2)
      expect(user).toBeTruthy();                                // 3)
      expect(user.name).toBe("Harry Potter");
    });
    
    const mockReq = testingController.expectOne('api/users/1'); // 4)
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[1]);
  });

  it('should update the user by id', () => {                    // 1) make call 2) subscribe to see data inside 3) test data inside 4) test actual http call 5) verify
    let changes = { age: 24 };

    service.updateUser(1, changes).subscribe((user: any) => {   // 1) 2)
      expect(user).toBeTruthy();                                // 3)
      expect(user.id).toBe(1);
    });
    
    const mockReq = testingController.expectOne('api/users/1'); // 4)
    expect(mockReq.request.method).toEqual('PUT');

    let modifiedUser = USERS[1]
    modifiedUser.age = 24;
    expect(mockReq.request.body.age).toEqual(changes.age);
    mockReq.flush(modifiedUser);
  });

  afterEach(() => {
    testingController.verify();                                  // 5) verifying that all requests that are called in this test are being handled
  });
});
