import type { Express } from "express";
import { createServer, type Server } from "http";
import { newsData } from "@/data/news";
import { playersData } from "@/data/players";
import { fixturesData } from "@/data/fixtures";
import { historyData } from "@/data/history";
import { galleryData } from "@/data/gallery";
import { productsData } from "@/data/products";
import { sponsorsData } from "@/data/sponsors";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Players API
  app.get('/api/players', (req, res) => {
    return res.json(playersData);
  });
  
  app.get('/api/players/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const player = playersData.find(p => p.id === id);
    
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    
    return res.json(player);
  });
  
  // Fixtures API
  app.get('/api/fixtures', (req, res) => {
    return res.json(fixturesData);
  });
  
  app.get('/api/fixtures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fixture = fixturesData.find(f => f.id === id);
    
    if (!fixture) {
      return res.status(404).json({ message: 'Fixture not found' });
    }
    
    return res.json(fixture);
  });
  
  // News API
  app.get('/api/news', (req, res) => {
    return res.json(newsData);
  });
  
  app.get('/api/news/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newsItem = newsData.find(n => n.id === id);
    
    if (!newsItem) {
      return res.status(404).json({ message: 'News item not found' });
    }
    
    return res.json(newsItem);
  });
  
  // History API
  app.get('/api/history', (req, res) => {
    return res.json(historyData);
  });
  
  app.get('/api/history/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const historyEvent = historyData.find(h => h.id === id);
    
    if (!historyEvent) {
      return res.status(404).json({ message: 'History event not found' });
    }
    
    return res.json(historyEvent);
  });
  
  // Gallery API
  app.get('/api/gallery', (req, res) => {
    return res.json(galleryData);
  });
  
  app.get('/api/gallery/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const galleryImage = galleryData.find(g => g.id === id);
    
    if (!galleryImage) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    
    return res.json(galleryImage);
  });
  
  // Products API
  app.get('/api/products', (req, res) => {
    return res.json(productsData);
  });
  
  app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = productsData.find(p => p.id === id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    return res.json(product);
  });
  
  // Sponsors API
  app.get('/api/sponsors', (req, res) => {
    return res.json(sponsorsData);
  });
  
  app.get('/api/sponsors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const sponsor = sponsorsData.find(s => s.id === id);
    
    if (!sponsor) {
      return res.status(404).json({ message: 'Sponsor not found' });
    }
    
    return res.json(sponsor);
  });

  const httpServer = createServer(app);

  return httpServer;
}
