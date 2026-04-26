import { useTabTitle } from '../../hooks/useTabTitle';
import PostLayout from './PostLayout';

export default function TheCostOfAMigration() {
  useTabTitle('The quiet cost of a migration nobody asked for — Shashwat');

  return (
    <PostLayout slug="the-cost-of-a-migration">
      <p><span className="lead">I</span>t started with a Slack message at 11 p.m. on a Tuesday. "Hey, we're deprecating the old auth service. Can you migrate by end of quarter?" Thirty-two words that would consume six weeks of my life and teach me more about organisational debt than any book on the subject.</p>
      <p>The service in question had been running since 2019. It authenticated roughly a thousand internal tools — most of which nobody had updated in years, some of which nobody could name with confidence. The migration wasn't technically complex. It was <strong>socially</strong> complex, which is a different thing entirely.</p>
      <h2>The audit nobody wanted to do</h2>
      <p>Before you can migrate anything, you have to know what you're migrating. This sounds obvious. It is not, in practice, easy. We had service-to-service dependencies tracked in a wiki that was last updated in 2021. We had a graph in Datadog that showed connections but not ownership. We had Slack channels where teams lived, but no canonical list of which team owned which service.</p>
      <blockquote>The real cost of technical debt isn't the code. It's the archaeology.</blockquote>
      <p>I spent the first week just building a map. Grep through logs. Message people who might know. Follow the breadcrumbs. By the end, I had a spreadsheet with 47 services confirmed as consumers, 11 that were probably consumers, and 8 that were mysteries.</p>
      <div className="pull-quote">A service with no owner is not a service. It is a liability with an SLA.</div>
      <h2>The migration itself</h2>
      <p>Once you have the map, the migration is almost anticlimactic. Change an environment variable, update a secret, bump a dependency version, ship. Most teams did it in an afternoon. A few required a meeting. One required two meetings and a very patient conversation about why the new auth service didn't support the obscure OAuth flow they'd been using since 2018.</p>
      <p>(It didn't support it because that flow was deprecated by the OAuth spec in 2017. Nobody had told them. Nobody had thought to look.)</p>
      <h2>What I actually learned</h2>
      <p>The technical work was straightforward. The organisational work was the job. And the lesson, which I keep relearning in different contexts, is this: <strong>the unglamorous work of removing things is almost always more valuable than the glamorous work of building them.</strong></p>
      <p>We shipped 47 migrations, retired a service, and reclaimed 3 servers' worth of compute. None of it will appear in a performance review. All of it made the system a little more legible, a little more honest about what it actually was.</p>
      <p>That seems like enough.</p>
      <span className="signoff">— S</span>
    </PostLayout>
  );
}
