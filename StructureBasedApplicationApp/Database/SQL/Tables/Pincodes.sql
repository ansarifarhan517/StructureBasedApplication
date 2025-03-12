CREATE TABLE Pincodes (
    id INT PRIMARY KEY IDENTITY(1,1),
    pincode VARCHAR(10) NOT NULL UNIQUE,
    stateId INT,
    countryId INT,
    FOREIGN KEY (stateId) REFERENCES States(id),  
    FOREIGN KEY (countryId) REFERENCES Countries(id) 
);
-------------- Before Running Below Insert Commad please add appropriate country and state id 
-- Delhi
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('110001', 1, 3); -- Connaught Place, New Delhi
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('110002', 1, 3); -- Daryaganj, New Delhi

-- Maharashtra
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('400001', 2, 3); -- Fort, Mumbai
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('411001', 2, 3); -- Pune City, Pune

-- Tamil Nadu
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('600001', 3, 3); -- Chennai GPO, Chennai
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('641001', 3, 3); -- Coimbatore

-- Karnataka
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('560001', 4, 3); -- Bangalore GPO, Bangalore
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('580001', 4, 3); -- Hubli

-- West Bengal
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('700001', 5, 3); -- BBD Bagh, Kolkata
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('713101', 5, 3); -- Durgapur

-- Uttar Pradesh
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('201301', 6, 3); -- Noida
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('226001', 6, 3); -- Lucknow GPO

-- Gujarat
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('380001', 7, 3); -- Ahmedabad
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('395003', 7, 3); -- Surat

-- Andhra Pradesh
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('500001', 8, 3); -- Hyderabad GPO
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('530001', 8, 3); -- Visakhapatnam

-- Rajasthan
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('302001', 9, 3); -- Jaipur GPO
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('313001', 9, 3); -- Udaipur

-- Punjab
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('160001', 10, 3); -- Chandigarh
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('141001', 10, 3); -- Ludhiana

-- Haryana
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('122001', 11, 3); -- Gurgaon
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('134109', 11, 3); -- Panchkula

-- Bihar
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('800001', 12, 3); -- Patna GPO
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('823001', 12, 3); -- Gaya

-- Madhya Pradesh
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('462001', 13, 3); -- Bhopal
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('482001', 13, 3); -- Jabalpur

-- Kerala
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('695001', 14, 3); -- Trivandrum GPO
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('682001', 14, 3); -- Kochi

-- Odisha
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('751001', 15, 3); -- Bhubaneswar GPO
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('769001', 15, 3); -- Rourkela

-- Assam
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('781001', 16, 3); -- Guwahati
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('785001', 16, 3); -- Jorhat

-- Jammu and Kashmir
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('180001', 17, 3); -- Jammu
INSERT INTO Pincodes (pincode, stateId, countryId) VALUES ('190001', 17, 3); -- Srinagar
