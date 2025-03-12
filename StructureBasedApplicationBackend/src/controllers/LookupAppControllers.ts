import { NextFunction, Request, Response } from "express";
import { Country } from "../models/Countires.models";
import jsonData from './samplePincode.json'
const fs = require('fs');
export const GetCountries = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countries = await Country.find({});
        if (countries !== null) {
            return res.status(200).json(countries)
        }
        res.status(200).json("message: No countries Present ")
    } catch (error) {
        res.status(500).json({ "error": error })

    }
}

export const GetPincode = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const generateData = (count: number) => {
            const data = [];

            for (let i = 0; i < count; i++) {
                const record = {
                    pincodeId: (72000 + i).toString(),
                    name: Math.floor(100000 + Math.random() * 900000).toString(),
                    country: i % 2 === 0 ? "CA" : "US",
                    pincode: Math.floor(100000 + Math.random() * 900000).toString(),
                    city: i % 2 === 0 ? "Montreal" : "New York",
                    state: i % 2 === 0 ? "Nova Scotia" : "New York",
                    description: "This is Farhan"
                };
                data.push(record);
            }

            return data;
        };

        // Generate 2 million records
        const largeDataset = generateData(2000000);
        return res.status(200).json([{
            "pincodeId": "90036",
            "name": "369965",
            "country": "US",
            "pincode": "369965",
            "city": "Los Angeles",
            "state": "New York"
        },
        {
            "pincodeId": "72182",
            "name": "064557",
            "country": "CA",
            "pincode": "064557",
            "city": "Montreal",
            "state": "Nova Scotia",
            "description": "This is Farhan"

        },])
        // res.status(200).json("message: No countries Present ")
    } catch (error) {
        res.status(500).json({ "error": error })

    }
}

export const GetStates = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countries = await Country.find({});
        if (countries !== null) {
            return res.status(200).json(countries)
        }
        res.status(200).json("message: No countries Present ")
    } catch (error) {
        res.status(500).json({ "error": error })

    }
}
