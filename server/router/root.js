const express = require('express');
const { fullInfoRouter } = require('./info');
const { contactInfoRouter } = require('./contact-info');
const { warehousesRouter } = require('./warehouses');
const { operatingAccountRouter } = require('./operating-account');
const { suppliersRouter } = require('./suppliers');
const { legalFormsRouter } = require('./legal-forms');
const { statkeyRouter } = require('./stat-key');
const { i18nRouter } = require('./i18n');
const { usersRouter } = require('./users');
const { todosRouter } = require('./todos');

const rootRouter = express.Router();

rootRouter.use('/info', fullInfoRouter);
rootRouter.use('/contact-info', contactInfoRouter);
rootRouter.use('/warehouses', warehousesRouter);
rootRouter.use('/supplier-info', operatingAccountRouter);
rootRouter.use('/I18N', i18nRouter);
rootRouter.use('/suppliers', suppliersRouter);
rootRouter.use('/users', usersRouter);
rootRouter.use('/legal-forms', legalFormsRouter);
rootRouter.use('/statkey', statkeyRouter);
rootRouter.use('/todos', todosRouter);

module.exports.rootRouter = rootRouter;
