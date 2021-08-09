import React from 'react';
import { render } from '@testing-library/react';
import Insights from './Insights';

it("renders invoice page", () => {
  const { getByText, container } = render(<Insights page={'invoice'} />);
  expect(getByText('Overdue')).toBeInTheDocument();
  expect(getByText('Due within next 30 days')).toBeInTheDocument();
  expect(getByText('100')).toBeInTheDocument();
  expect(getByText('Average time to get paid')).toBeInTheDocument();
  expect(getByText('days')).toBeInTheDocument();
  expect(getByText('Upcoming payout')).toBeInTheDocument();
  expect(getByText('None')).toBeInTheDocument();

  const outerDiv = container.querySelector('.insights-container');
  expect(outerDiv).not.toBe(null);
})

it("renders payout page", () => {
  const { getByText, container } = render(<Insights page={'payout'} />);
  expect(getByText('Payout amount')).toBeInTheDocument();
  expect(getByText('USD')).toBeInTheDocument();
  expect(getByText('Credit - you receive')).toBeInTheDocument();
  expect(getByText('Destination')).toBeInTheDocument();
  expect(getByText('Wells Fargo')).toBeInTheDocument();
  expect(getByText('12341234')).toBeInTheDocument();
  expect(getByText('Delivery')).toBeInTheDocument();
  expect(getByText('03-18-2021')).toBeInTheDocument();
  expect(getByText('Status')).toBeInTheDocument();
  expect(getByText('Completed')).toBeInTheDocument();

  const outerDiv = container.querySelector('.insights-container');
  expect(outerDiv).not.toBe(null);
})