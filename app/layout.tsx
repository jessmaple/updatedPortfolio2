import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jessica Maple - QA Automation Engineer',
	description:
		'Welcome to my portfolio! I am a dedicated QA Engineer who believes in clarity and precision. I focus on building reliable testing strategies that ensure software works as intended, with an emphasis on quality, efficiency, and user trust. My goal is to uncover issues before they reach the end-user and to help deliver seamless, dependable products.',
	keywords: [
		'QA Engineer',
  'QA Automation Engineer',
  'Manual Testing',
  'Automated Testing',
  'Test Automation',
  'Selenium',
  'Playwright',
  'Cypress',
  'JUnit',
  'Mocha',
  'Chai',
  'PyTest',
  'Jest',
  'Agile Testing',
  'Scrum',
  'SDLC',
  'STLC',
  'CI/CD',
  'DevOps Testing',
  'Regression Testing',
  'Integration Testing',
  'Unit Testing',
  'End-to-End Testing',
  'API Testing',
  'Performance Testing',
  'Load Testing',
  'Postman',
  'JMeter',
  'GitHub Actions',
  'Jenkins',
  'Docker',
  'Kubernetes Testing',
  'BrowserStack',
  'TestRail',
  'Jira',
  'Quality Assurance',
  'Software Testing',
  'Bug Tracking',
  'Defect Management',
  'Continuous Testing',
  'Test Strategy',
  'QA Best Practices',
  'Clean Code',
  'Simple Design',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'User Experience',
  'Problem Solving',
  'Effective Solutions',
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'Jessica Maple',
	],
	authors: [{ name: 'Jessica Maple' }],
	creator: 'Jessica',
	openGraph: {
		title: '[Your Name] - Developer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://your-domain.com',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Developer',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
