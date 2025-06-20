import { fixturesData } from '@/data/fixtures';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface Fixture {
  id: number;
  type: 'upcoming' | 'result';
  date: string;
  time?: string;
  homeTeam: {
    name: string;
    shortName: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    shortName: string;
    logo: string;
  };
  matchday: number;
  venue: string;
  homeScore?: number;
  awayScore?: number;
  result?: 'win' | 'loss' | 'draw';
  scorers?: string;
}

export default function FixturesSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'results'>('upcoming');
  
  const { data: fixtures, isLoading } = useQuery<Fixture[]>({
    queryKey: ['/api/fixtures'],
  });

  const upcomingFixtures = fixturesData?.filter(fixture => fixture.type === 'upcoming') || [];
  const resultFixtures = fixturesData?.filter(fixture => fixture.type === 'result') || [];

  return (
    <section id="fixtures" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Fixtures & Results</h2>
        <p className="text-center mb-8 text-gray-600 max-w-3xl mx-auto">
          Stay updated with our upcoming matches and latest results in the Ntare Lions League.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg focus:z-10 focus:ring-2 focus:ring-secondary ${
                activeTab === 'upcoming' ? 'active-tab' : 'inactive-tab'
              }`}
            >
              Upcoming
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('results')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg focus:z-10 focus:ring-2 focus:ring-secondary ${
                activeTab === 'results' ? 'active-tab' : 'inactive-tab'
              }`}
            >
              Results
            </button>
          </div>
        </div>
        
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md animate-pulse">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                  </div>
                  <div className="text-center">
                    <div className="h-6 bg-gray-300 rounded w-12 mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-16 mx-auto"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${activeTab === 'upcoming' ? 'block' : 'hidden'}`}>
              {upcomingFixtures.map((fixture) => (
                <div key={fixture.id} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500">{fixture.date} {fixture.time ? `• ${fixture.time}` : ''}</span>
                    <span className="bg-secondary text-primary text-xs px-2 py-1 rounded-full font-semibold">Upcoming</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <span className="font-bold text-primary">{fixture.homeTeam.shortName}</span>
                      </div>
                      <span className="font-semibold">{fixture.homeTeam.name}</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400">VS</div>
                      <span className="text-xs text-gray-500">Matchday {fixture.matchday}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <span className="font-bold text-gray-700">{fixture.awayTeam.shortName}</span>
                      </div>
                      <span className="font-semibold">{fixture.awayTeam.name}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">{fixture.venue}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${activeTab === 'results' ? 'block' : 'hidden'}`}>
              {resultFixtures.map((fixture) => (
                <div key={fixture.id} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500">{fixture.date}</span>
                    <span className={`text-white text-xs px-2 py-1 rounded-full font-semibold ${
                      fixture.result === 'win' ? 'bg-green-500' : 
                      fixture.result === 'draw' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      {fixture.result === 'win' ? 'Win' : fixture.result === 'draw' ? 'Draw' : 'Loss'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <span className="font-bold text-primary">{fixture.homeTeam.shortName}</span>
                      </div>
                      <span className="font-semibold">{fixture.homeTeam.name}</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold">{fixture.homeScore} - {fixture.awayScore}</div>
                      <span className="text-xs text-gray-500">Full Time</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <span className="font-bold text-blue-700">{fixture.awayTeam.shortName}</span>
                      </div>
                      <span className="font-semibold">{fixture.awayTeam.name}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Goals: {fixture.scorers}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="text-center mt-10">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition">
            View Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
