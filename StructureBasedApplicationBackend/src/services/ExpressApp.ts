import express, { Application } from 'express';
import compression from 'compression';
import { DoctorRoutes, LoginAppRoutes, LookupAppRoutes } from '../routes';
// import path from 'path'
// import { AdminRoutes, ShoppingRouter, VendorRoutes, CustomerRoutes, DeliveryRoute } from '../routes'
// import { gzipSync } from 'fflate';
import cors from 'cors'

export default async (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // gzip compression
  app.use(compression());
  // app.use('/images', express.static(path.join(__dirname, 'images')))

  app.use('/doctor', DoctorRoutes);
  app.use('/LookupApp', LookupAppRoutes);
  app.use('/LoginApp', LoginAppRoutes);
  // app.use('/vendor', VendorRoutes);
  // app.use('/customer', CustomerRoutes)
  // app.use('/delivery', DeliveryRoute)
  // app.use(ShoppingRouter)

  return app;
};