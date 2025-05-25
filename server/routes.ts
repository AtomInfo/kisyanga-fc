import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Players API
  app.get('/api/players', async (req, res) => {
    const players = await storage.getAllPlayers();
    return res.json(players);
  });
  
  app.get('/api/players/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const player = await storage.getPlayer(id);
    
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    
    return res.json(player);
  });
  
  // Fixtures API
  app.get('/api/fixtures', async (req, res) => {
    const fixtures = await storage.getAllFixtures();
    
    // Map fixtures to match the client-side expected format
    const formattedFixtures = fixtures.map(fixture => ({
      id: fixture.id,
      type: fixture.type,
      date: fixture.date,
      time: fixture.time,
      homeTeam: {
        name: fixture.homeTeamName,
        shortName: fixture.homeTeamShortName,
        logo: fixture.homeTeamLogo
      },
      awayTeam: {
        name: fixture.awayTeamName,
        shortName: fixture.awayTeamShortName,
        logo: fixture.awayTeamLogo
      },
      matchday: fixture.matchday,
      venue: fixture.venue,
      homeScore: fixture.homeScore,
      awayScore: fixture.awayScore,
      result: fixture.result,
      scorers: fixture.scorers
    }));
    
    return res.json(formattedFixtures);
  });
  
  app.get('/api/fixtures/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const fixture = await storage.getFixture(id);
    
    if (!fixture) {
      return res.status(404).json({ message: 'Fixture not found' });
    }
    
    // Format fixture to match client-side expected format
    const formattedFixture = {
      id: fixture.id,
      type: fixture.type,
      date: fixture.date,
      time: fixture.time,
      homeTeam: {
        name: fixture.homeTeamName,
        shortName: fixture.homeTeamShortName,
        logo: fixture.homeTeamLogo
      },
      awayTeam: {
        name: fixture.awayTeamName,
        shortName: fixture.awayTeamShortName,
        logo: fixture.awayTeamLogo
      },
      matchday: fixture.matchday,
      venue: fixture.venue,
      homeScore: fixture.homeScore,
      awayScore: fixture.awayScore,
      result: fixture.result,
      scorers: fixture.scorers
    };
    
    return res.json(formattedFixture);
  });
  
  // News API
  app.get('/api/news', async (req, res) => {
    const news = await storage.getAllNews();
    return res.json(news);
  });
  
  app.get('/api/news/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const newsItem = await storage.getNewsItem(id);
    
    if (!newsItem) {
      return res.status(404).json({ message: 'News item not found' });
    }
    
    return res.json(newsItem);
  });
  
  // History API
  app.get('/api/history', async (req, res) => {
    const history = await storage.getAllHistory();
    return res.json(history);
  });
  
  app.get('/api/history/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const historyEvent = await storage.getHistoryEvent(id);
    
    if (!historyEvent) {
      return res.status(404).json({ message: 'History event not found' });
    }
    
    return res.json(historyEvent);
  });
  
  // Gallery API
  app.get('/api/gallery', async (req, res) => {
    const gallery = await storage.getAllGallery();
    return res.json(gallery);
  });
  
  app.get('/api/gallery/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const galleryImage = await storage.getGalleryImage(id);
    
    if (!galleryImage) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    
    return res.json(galleryImage);
  });
  
  // Products API
  app.get('/api/products', async (req, res) => {
    const products = await storage.getAllProducts();
    return res.json(products);
  });
  
  app.get('/api/products/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await storage.getProduct(id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    return res.json(product);
  });
  
  // Sponsors API
  app.get('/api/sponsors', async (req, res) => {
    const sponsors = await storage.getAllSponsors();
    return res.json(sponsors);
  });
  
  app.get('/api/sponsors/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const sponsor = await storage.getSponsor(id);
    
    if (!sponsor) {
      return res.status(404).json({ message: 'Sponsor not found' });
    }
    
    return res.json(sponsor);
  });

  const httpServer = createServer(app);

  return httpServer;
}
