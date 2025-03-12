import { NextFunction, Request, Response } from "express";
import Structure from "../models/Structures.models";
import Label from "../models/Labels.models";

export const GetStructure = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { pageName, sectionName } = req.query;
        const structure = await Structure.find()
        res.status(200).json(structure)

    } catch (error) {

    }
}

export const GetLabels = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { labels } = req.query;  // labels passed as a query parameter
        // const session = req.session;  // Assuming session data is available in req.session
        // const clientCustomizedLabels = req.body.clientCustomizedLabels || {}; // Custom labels from body

        // const locale = session.locale || Constants.DEFAULT_LANGUAGE_CODE;
        let results = [];

        // Checking if any labels are provided
        if (typeof labels === 'string' && labels.length > 0) {
            const labelArray = labels.split(',');  // Split the string of labels into an array

            // Fetch labels based on client ID and user group
            // if (session.clientId) {
            // let clientLabelList = await Label.find({
            //     clientId: 0,
            //     userGroupId: 0,
            //     locale: "en-GB",
            //     key: { $in: labelArray }
            // });
            // if (clientLabelList.length > 0) {
            //     addLabelToResults(clientLabelList, labelArray, results);
            // }
            // }

            // Fetch default labels if none of the above conditions matched
            if (labelArray.length > 0) {
                let defaultLabelList = await Label.find({
                    clientId: 0,
                    locale: "en-GB",
                    key: { $in: labelArray },

                });
                if (defaultLabelList.length > 0) {
                    addLabelToResults(defaultLabelList, labelArray, results);
                }
            }

            const resultMap = results.reduce((acc: any, label: any) => {
                acc[label.key] = label.value;
                return acc;
            }, {});

            // // If the locale is not the default one, get default English labels
            // if (locale !== Constants.DEFAULT_LANGUAGE_CODE && labelArray.length > 0) {
            //     let defaultLabelList = await getDefaultLocaleLabels(labelArray, Constants.DEFAULT_LANGUAGE_CODE, session);
            //     if (defaultLabelList.length > 0) {
            //         addLabelToResults(defaultLabelList, labelArray, results);
            //     }
            // }



            res.status(200).json(resultMap);  // Return the results as JSON
        } else {
            res.status(400).json({ message: 'No labels provided' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Helper function to add labels to the result set
function addLabelToResults(labelList, labels, results) {
    if (labelList && labelList.length > 0) {
        labelList.forEach(label => {
            while (labels.splice(labels.indexOf(label.key), 1).length > 0) { }
        });
        console.log(labelList, "labelList")
        results.push(...labelList);
    }
}

// Helper function to get default locale labels (you can modify it as needed)
// const getDefaultLocaleLabels = async (labels, locale, session) => {
//     // You can implement the logic to get the default labels for the provided locale.
//     return await Label.find({
//         clientId: 0,
//         locale: locale,
//         key: { $in: labels }
//     });
// };

