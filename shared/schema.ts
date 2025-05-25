import { pgTable, text, serial, integer, boolean, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for potential future authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Players table
export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  nickname: text("nickname"),
  position: text("position").notNull(),
  rating: real("rating").notNull(),
  tag: text("tag"),
  tagDescription: text("tag_description"),
  image: text("image").notNull(),
});

// Fixtures/Results table
export const fixtures = pgTable("fixtures", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'upcoming' or 'result'
  date: text("date").notNull(),
  time: text("time"),
  homeTeamName: text("home_team_name").notNull(),
  homeTeamShortName: text("home_team_short_name").notNull(),
  homeTeamLogo: text("home_team_logo"),
  awayTeamName: text("away_team_name").notNull(),
  awayTeamShortName: text("away_team_short_name").notNull(),
  awayTeamLogo: text("away_team_logo"),
  matchday: integer("matchday").notNull(),
  venue: text("venue").notNull(),
  homeScore: integer("home_score"),
  awayScore: integer("away_score"),
  result: text("result"), // 'win', 'loss', or 'draw'
  scorers: text("scorers"),
});

// News table
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

// History events table
export const history = pgTable("history", {
  id: serial("id").primaryKey(),
  year: text("year").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

// Gallery images table
export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  src: text("src").notNull(),
  alt: text("alt").notNull(),
});

// Products table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  image: text("image").notNull(),
});

// Sponsors table
export const sponsors = pgTable("sponsors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPlayerSchema = createInsertSchema(players);
export const insertFixtureSchema = createInsertSchema(fixtures);
export const insertNewsSchema = createInsertSchema(news);
export const insertHistorySchema = createInsertSchema(history);
export const insertGallerySchema = createInsertSchema(gallery);
export const insertProductSchema = createInsertSchema(products);
export const insertSponsorSchema = createInsertSchema(sponsors);

// Define types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;

export type InsertFixture = z.infer<typeof insertFixtureSchema>;
export type Fixture = typeof fixtures.$inferSelect;

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;

export type InsertHistory = z.infer<typeof insertHistorySchema>;
export type History = typeof history.$inferSelect;

export type InsertGallery = z.infer<typeof insertGallerySchema>;
export type Gallery = typeof gallery.$inferSelect;

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertSponsor = z.infer<typeof insertSponsorSchema>;
export type Sponsor = typeof sponsors.$inferSelect;
