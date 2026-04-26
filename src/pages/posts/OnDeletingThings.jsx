import { useTabTitle } from '../../hooks/useTabTitle';
import PostLayout from './PostLayout';

export default function OnDeletingThings() {
  useTabTitle('On deleting things: 34 services, one weekend — Shashwat');

  return (
    <PostLayout slug="on-deleting-things">
      <p>
        <span className="lead">W</span>e had 34 services that nobody would admit to owning.
        I know because I made a list. It took a Friday afternoon and a determined attitude
        toward Slack's search function. By Sunday evening, 34 had become zero.
        What I felt was not satisfaction, exactly. It was something quieter than that.
      </p>

      <p>
        This is a story about deletion, which is underrated as an engineering practice,
        and slightly terrifying as a weekend activity.
      </p>

      <h2>The kill list</h2>

      <p>
        The services had accumulated over three years of "we'll clean this up later."
        Some were experiments that shipped and then got superseded. Some were internal tools
        that one person used, then stopped using, then left the company. Some were mysteries:
        services with no commits since 2021, no documentation, no owner in any system we had,
        and yet — traffic. Actual traffic. From something.
      </p>

      <blockquote>
        The most dangerous service is the one that's obviously unused but receives
        three requests a day from an unknown source.
      </blockquote>

      <p>
        I built a spreadsheet. Columns: service name, last deploy, last commit, owner (guessed),
        owner (confirmed), traffic (yes/no), traffic (source known), safe to delete (yes/maybe/no).
        The "maybe" column was where the interesting work happened.
      </p>

      <div className="pull-quote">
        Nothing reveals organizational knowledge like a kill list. Suddenly everyone has opinions.
      </div>

      <h2>The ceremony</h2>

      <p>
        I want to be honest: I held a small ceremony for the most mysterious one.
        <code>auth-v2-legacy-prod</code>. It had been running for four years.
        It had processed — by my rough estimate — about 800 million requests.
        Nobody knew what it did. When we finally traced its traffic, it turned out to be
        a webhook receiver for a third-party service we'd stopped using in 2022.
        The third-party service was still sending webhooks. To an endpoint that did nothing.
        For two years.
      </p>

      <p>
        We decommissioned it on a Saturday morning. I sent a message in the engineering channel:
        "auth-v2-legacy-prod has been retired. It served faithfully and in complete obscurity.
        Godspeed." Three people reacted with 🫡. I counted that as a success.
      </p>

      <h2>What deletion actually costs</h2>

      <p>
        The weekend cost me about 14 hours of focused work across two days.
        We reclaimed 12 nodes, simplified 3 service meshes, and removed 47,000 lines of
        infrastructure configuration. The codebase is slightly more honest about what it is.
      </p>

      <p>
        The real cost was social: convincing people it was safe to delete things
        they'd built, things that represented work and decisions and, in a few cases,
        entire product bets that hadn't paid off. Deletion is an admission.
        That's why it's hard.
      </p>

      <p>
        But the alternative is a system that slowly becomes a museum:
        full of things nobody uses, nobody understands, and nobody will touch
        because touching might break something.
      </p>

      <p>
        Delete the museum. Build the thing.
      </p>

      <span className="signoff">— S</span>
    </PostLayout>
  );
}
