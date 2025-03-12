CREATE TABLE Addresses (
    id INT PRIMARY KEY IDENTITY(1,1),
    userID INT, -- Reference to User/Client/Customer table
    street VARCHAR(255),
    city VARCHAR(100),
    pincode_id INT,
    state_id INT, -- Reference to States table
    country_id INT, -- Reference to Countries table
    FOREIGN KEY (pincode_id) REFERENCES Pincodes(id),
    FOREIGN KEY (state_id) REFERENCES States(id), -- Foreign key for state
    FOREIGN KEY (country_id) REFERENCES Countries(id) -- Foreign key for country
);
