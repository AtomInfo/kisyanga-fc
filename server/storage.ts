import { 
  User, InsertUser, 
  Player, InsertPlayer,
  Fixture, InsertFixture,
  News, InsertNews,
  History, InsertHistory,
  Gallery, InsertGallery,
  Product, InsertProduct,
  Sponsor, InsertSponsor,
  users, players, fixtures, news, history, gallery, products, sponsors
} from "@shared/schema";

import { db } from "./db";
import { eq } from "drizzle-orm";

// For initial data seeding
import { playersData } from "./data/players";
import { fixturesData } from "./data/fixtures";
import { newsData } from "./data/news";
import { historyData } from "./data/history";
import { galleryData } from "./data/gallery";
import { productsData } from "./data/products";
import { sponsorsData } from "./data/sponsors";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Players
  getAllPlayers(): Promise<Player[]>;
  getPlayer(id: number): Promise<Player | undefined>;
  
  // Fixtures
  getAllFixtures(): Promise<Fixture[]>;
  getFixture(id: number): Promise<Fixture | undefined>;
  
  // News
  getAllNews(): Promise<News[]>;
  getNewsItem(id: number): Promise<News | undefined>;
  
  // History
  getAllHistory(): Promise<History[]>;
  getHistoryEvent(id: number): Promise<History | undefined>;
  
  // Gallery
  getAllGallery(): Promise<Gallery[]>;
  getGalleryImage(id: number): Promise<Gallery | undefined>;
  
  // Products
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  
  // Sponsors
  getAllSponsors(): Promise<Sponsor[]>;
  getSponsor(id: number): Promise<Sponsor | undefined>;
  
  // Database seeding
  seedDatabase(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Players
  async getAllPlayers(): Promise<Player[]> {
    return await db.select().from(players);
  }
  
  async getPlayer(id: number): Promise<Player | undefined> {
    const [player] = await db.select().from(players).where(eq(players.id, id));
    return player;
  }
  
  // Fixtures
  async getAllFixtures(): Promise<Fixture[]> {
    return await db.select().from(fixtures);
  }
  
  async getFixture(id: number): Promise<Fixture | undefined> {
    const [fixture] = await db.select().from(fixtures).where(eq(fixtures.id, id));
    return fixture;
  }
  
  // News
  async getAllNews(): Promise<News[]> {
    return await db.select().from(news);
  }
  
  async getNewsItem(id: number): Promise<News | undefined> {
    const [newsItem] = await db.select().from(news).where(eq(news.id, id));
    return newsItem;
  }
  
  // History
  async getAllHistory(): Promise<History[]> {
    return await db.select().from(history);
  }
  
  async getHistoryEvent(id: number): Promise<History | undefined> {
    const [historyEvent] = await db.select().from(history).where(eq(history.id, id));
    return historyEvent;
  }
  
  // Gallery
  async getAllGallery(): Promise<Gallery[]> {
    return await db.select().from(gallery);
  }
  
  async getGalleryImage(id: number): Promise<Gallery | undefined> {
    const [galleryImage] = await db.select().from(gallery).where(eq(gallery.id, id));
    return galleryImage;
  }
  
  // Products
  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }
  
  // Sponsors
  async getAllSponsors(): Promise<Sponsor[]> {
    return await db.select().from(sponsors);
  }
  
  async getSponsor(id: number): Promise<Sponsor | undefined> {
    const [sponsor] = await db.select().from(sponsors).where(eq(sponsors.id, id));
    return sponsor;
  }
  
  // Database seeding
  async seedDatabase(): Promise<void> {
    // Seed players table
    const existingPlayers = await db.select().from(players);
    if (existingPlayers.length === 0) {
      await db.insert(players).values(playersData);
    }
    
    // Seed fixtures table with formatted data
    const existingFixtures = await db.select().from(fixtures);
    if (existingFixtures.length === 0) {
      const formattedFixtures = fixturesData.map(fixture => ({
        id: fixture.id,
        type: fixture.type,
        date: fixture.date,
        time: fixture.time || null,
        homeTeamName: fixture.homeTeam.name,
        homeTeamShortName: fixture.homeTeam.shortName,
        homeTeamLogo: fixture.homeTeam.logo || null,
        awayTeamName: fixture.awayTeam.name,
        awayTeamShortName: fixture.awayTeam.shortName,
        awayTeamLogo: fixture.awayTeam.logo || null,
        matchday: fixture.matchday,
        venue: fixture.venue,
        homeScore: fixture.homeScore || null,
        awayScore: fixture.awayScore || null,
        result: fixture.result || null,
        scorers: fixture.scorers || null
      }));
      await db.insert(fixtures).values(formattedFixtures);
    }
    
    // Seed news table
    const existingNews = await db.select().from(news);
    if (existingNews.length === 0) {
      await db.insert(news).values(newsData);
    }
    
    // Seed history table
    const existingHistory = await db.select().from(history);
    if (existingHistory.length === 0) {
      await db.insert(history).values(historyData);
    }
    
    // Seed gallery table
    const existingGallery = await db.select().from(gallery);
    if (existingGallery.length === 0) {
      await db.insert(gallery).values(galleryData);
    }
    
    // Seed products table
    const existingProducts = await db.select().from(products);
    if (existingProducts.length === 0) {
      await db.insert(products).values(productsData);
    }
    
    // Seed sponsors table
    const existingSponsors = await db.select().from(sponsors);
    if (existingSponsors.length === 0) {
      await db.insert(sponsors).values(sponsorsData);
    }
  }
}

export const storage = new DatabaseStorage();
