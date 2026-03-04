import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.get('/ontozorendszer', (req, res) => res.render('ontozorendszer'));
router.get('/kertkarbantartas', (req, res) => res.render('kertkarbantartas'));
router.get('/zoldfal', (req, res) => res.render('zoldfal'));

export default router;
