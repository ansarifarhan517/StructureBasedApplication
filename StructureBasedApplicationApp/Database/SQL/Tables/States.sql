CREATE TABLE States (
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) NOT NULL , --Not making Unique because othercountries state can have same code  
    countryId INT,
    FOREIGN KEY (countryId) REFERENCES Countries(id)
);


-- States for United States of America (country_id: 186)
INSERT INTO States (name, code, countryId) VALUES ('Alabama', 'AL', 186);
INSERT INTO States (name, code, countryId) VALUES ('Alaska', 'AK', 186);
INSERT INTO States (name, code, countryId) VALUES ('Arizona', 'AZ', 186);
INSERT INTO States (name, code, countryId) VALUES ('Arkansas', 'AR', 186);
INSERT INTO States (name, code, countryId) VALUES ('California', 'CA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Colorado', 'CO', 186);
INSERT INTO States (name, code, countryId) VALUES ('Connecticut', 'CT', 186);
INSERT INTO States (name, code, countryId) VALUES ('Delaware', 'DE', 186);
INSERT INTO States (name, code, countryId) VALUES ('Florida', 'FL', 186);
INSERT INTO States (name, code, countryId) VALUES ('Georgia', 'GA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Hawaii', 'HI', 186);
INSERT INTO States (name, code, countryId) VALUES ('Idaho', 'ID', 186);
INSERT INTO States (name, code, countryId) VALUES ('Illinois', 'IL', 186);
INSERT INTO States (name, code, countryId) VALUES ('Indiana', 'IN', 186);
INSERT INTO States (name, code, countryId) VALUES ('Iowa', 'IA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Kansas', 'KS', 186);
INSERT INTO States (name, code, countryId) VALUES ('Kentucky', 'KY', 186);
INSERT INTO States (name, code, countryId) VALUES ('Louisiana', 'LA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Maine', 'ME', 186);
INSERT INTO States (name, code, countryId) VALUES ('Maryland', 'MD', 186);
INSERT INTO States (name, code, countryId) VALUES ('Massachusetts', 'MA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Michigan', 'MI', 186);
INSERT INTO States (name, code, countryId) VALUES ('Minnesota', 'MN', 186);
INSERT INTO States (name, code, countryId) VALUES ('Mississippi', 'MS', 186);
INSERT INTO States (name, code, countryId) VALUES ('Missouri', 'MO', 186);
INSERT INTO States (name, code, countryId) VALUES ('Montana', 'MT', 186);
INSERT INTO States (name, code, countryId) VALUES ('Nebraska', 'NE', 186);
INSERT INTO States (name, code, countryId) VALUES ('Nevada', 'NV', 186);
INSERT INTO States (name, code, countryId) VALUES ('New Hampshire', 'NH', 186);
INSERT INTO States (name, code, countryId) VALUES ('New Jersey', 'NJ', 186);
INSERT INTO States (name, code, countryId) VALUES ('New Mexico', 'NM', 186);
INSERT INTO States (name, code, countryId) VALUES ('New York', 'NY', 186);
INSERT INTO States (name, code, countryId) VALUES ('North Carolina', 'NC', 186);
INSERT INTO States (name, code, countryId) VALUES ('North Dakota', 'ND', 186);
INSERT INTO States (name, code, countryId) VALUES ('Ohio', 'OH', 186);
INSERT INTO States (name, code, countryId) VALUES ('Oklahoma', 'OK', 186);
INSERT INTO States (name, code, countryId) VALUES ('Oregon', 'OR', 186);
INSERT INTO States (name, code, countryId) VALUES ('Pennsylvania', 'PA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Rhode Island', 'RI', 186);
INSERT INTO States (name, code, countryId) VALUES ('South Carolina', 'SC', 186);
INSERT INTO States (name, code, countryId) VALUES ('South Dakota', 'SD', 186);
INSERT INTO States (name, code, countryId) VALUES ('Tennessee', 'TN', 186);
INSERT INTO States (name, code, countryId) VALUES ('Texas', 'TX', 186);
INSERT INTO States (name, code, countryId) VALUES ('Utah', 'UT', 186);
INSERT INTO States (name, code, countryId) VALUES ('Vermont', 'VT', 186);
INSERT INTO States (name, code, countryId) VALUES ('Virginia', 'VA', 186);
INSERT INTO States (name, code, countryId) VALUES ('Washington', 'WA', 186);
INSERT INTO States (name, code, countryId) VALUES ('West Virginia', 'WV', 186);
INSERT INTO States (name, code, countryId) VALUES ('Wisconsin', 'WI', 186);
INSERT INTO States (name, code, countryId) VALUES ('Wyoming', 'WY', 186);

-- States for Australia (country_id: 9)
INSERT INTO States (name, code, countryId) VALUES ('New South Wales', 'NSW', 9);
INSERT INTO States (name, code, countryId) VALUES ('Queensland', 'QLD', 9);
INSERT INTO States (name, code, countryId) VALUES ('South Australia', 'SA', 9);
INSERT INTO States (name, code, countryId) VALUES ('Tasmania', 'TAS', 9);
INSERT INTO States (name, code, countryId) VALUES ('Victoria', 'VIC', 9);
INSERT INTO States (name, code, countryId) VALUES ('Western Australia', 'WA', 9);
INSERT INTO States (name, code, countryId) VALUES ('Australian Capital Territory', 'ACT', 9);
INSERT INTO States (name, code, countryId) VALUES ('Northern Territory', 'NT', 9);


-- States for India (country_id: 76)
INSERT INTO States (name, code, countryId) VALUES ('Andhra Pradesh', 'AP', 76);
INSERT INTO States (name, code, countryId) VALUES ('Arunachal Pradesh', 'AR', 76);
INSERT INTO States (name, code, countryId) VALUES ('Assam', 'AS', 76);
INSERT INTO States (name, code, countryId) VALUES ('Bihar', 'BR', 76);
INSERT INTO States (name, code, countryId) VALUES ('Chhattisgarh', 'CG', 76);
INSERT INTO States (name, code, countryId) VALUES ('Goa', 'GA', 76);
INSERT INTO States (name, code, countryId) VALUES ('Gujarat', 'GJ', 76);
INSERT INTO States (name, code, countryId) VALUES ('Haryana', 'HR', 76);
INSERT INTO States (name, code, countryId) VALUES ('Himachal Pradesh', 'HP', 76);
INSERT INTO States (name, code, countryId) VALUES ('Jharkhand', 'JH', 76);
INSERT INTO States (name, code, countryId) VALUES ('Karnataka', 'KA', 76);
INSERT INTO States (name, code, countryId) VALUES ('Kerala', 'KL', 76);
INSERT INTO States (name, code, countryId) VALUES ('Madhya Pradesh', 'MP', 76);
INSERT INTO States (name, code, countryId) VALUES ('Maharashtra', 'MH', 76);
INSERT INTO States (name, code, countryId) VALUES ('Manipur', 'MN', 76);
INSERT INTO States (name, code, countryId) VALUES ('Meghalaya', 'ML', 76);
INSERT INTO States (name, code, countryId) VALUES ('Mizoram', 'MZ', 76);
INSERT INTO States (name, code, countryId) VALUES ('Nagaland', 'NL', 76);
INSERT INTO States (name, code, countryId) VALUES ('Odisha', 'OD', 76);
INSERT INTO States (name, code, countryId) VALUES ('Punjab', 'PB', 76);
INSERT INTO States (name, code, countryId) VALUES ('Rajasthan', 'RJ', 76);
INSERT INTO States (name, code, countryId) VALUES ('Sikkim', 'SK', 76);
INSERT INTO States (name, code, countryId) VALUES ('Tamil Nadu', 'TN', 76);
INSERT INTO States (name, code, countryId) VALUES ('Telangana', 'TG', 76);
INSERT INTO States (name, code, countryId) VALUES ('Tripura', 'TR', 76);
INSERT INTO States (name, code, countryId) VALUES ('Uttar Pradesh', 'UP', 76);
INSERT INTO States (name, code, countryId) VALUES ('Uttarakhand', 'UK', 76);
INSERT INTO States (name, code, countryId) VALUES ('West Bengal', 'WB', 76);
INSERT INTO States (name, code, countryId) VALUES ('Delhi', 'DL', 76);
INSERT INTO States (name, code, countryId) VALUES ('Puducherry', 'PY', 76);

-- States for Pakistan (country_id: 131)
INSERT INTO States (name, code, countryId) VALUES ('Balochistan', 'BL', 131);
INSERT INTO States (name, code, countryId) VALUES ('Federally Administered Tribal Areas', 'FATA', 131);
INSERT INTO States (name, code, countryId) VALUES ('Gilgit-Baltistan', 'GB', 131);
INSERT INTO States (name, code, countryId) VALUES ('Khyber Pakhtunkhwa', 'KP', 131);
INSERT INTO States (name, code, countryId) VALUES ('Punjab', 'PB', 131);
INSERT INTO States (name, code, countryId) VALUES ('Sindh', 'SD', 131);
INSERT INTO States (name, code, countryId) VALUES ('Islamabad Capital Territory', 'ICT', 131);
