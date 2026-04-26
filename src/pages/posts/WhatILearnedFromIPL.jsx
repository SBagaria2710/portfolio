import { useTabTitle } from '../../hooks/useTabTitle';
import PostLayout from './PostLayout';

export default function WhatILearnedFromIPL() {
  useTabTitle('What live cricket taught me about backpressure — Shashwat');

  return (
    <PostLayout slug="what-i-learned-from-ipl">
      <p>
        <span className="lead">T</span>here is a moment, during every IPL match, when approximately
        forty million people open the same app at the same time. Someone hits a six off the last ball
        of an over. The crowd erupts. And every phone in India — in offices, in living rooms,
        in rickshaws idling at traffic lights — refreshes simultaneously.
      </p>

      <p>
        I've been on the other side of that moment for two seasons now. And what it teaches you,
        faster than any textbook, is what <strong>backpressure</strong> actually means.
      </p>

      <h2>The spike that isn't really a spike</h2>

      <p>
        When I joined the live-sports team, I had a rough mental model of cricket traffic: big game,
        lots of requests, scale accordingly. What I didn't understand was the shape of the traffic.
        It isn't a smooth curve. It's a heartbeat: quiet between balls, then a sudden wall when
        something happens, then quiet again.
      </p>

      <blockquote>
        The system doesn't need to handle high throughput. It needs to handle high throughput
        that arrives all at once and then stops.
      </blockquote>

      <p>
        This is a different problem. A traditional autoscaler that responds to sustained load
        is too slow. By the time it spins up new instances, the wave has passed and the users
        have either gotten their update or given up and gone back to watching TV.
      </p>

      <div className="pull-quote">
        What cricket taught me: the goal isn't to handle the load. The goal is to absorb it gracefully.
      </div>

      <h2>Backpressure as a design principle</h2>

      <p>
        The insight that changed how I think about this: backpressure isn't a failure mode.
        It's a design primitive. When a downstream service can't keep up, the right response isn't
        always "add capacity." Sometimes it's "slow down the producer."
      </p>

      <p>
        We rebuilt our scoring pipeline with this in mind. Instead of every client polling directly,
        we introduced a fan-out layer that debounced updates and broadcast them in controlled bursts.
        The result: 68% fewer downstream API calls, and a system that stays cool during a Kohli century
        instead of melting.
      </p>

      <h2>The human version</h2>

      <p>
        The same principle applies to engineering teams. When a team is overwhelmed with requests —
        from stakeholders, from on-call, from adjacent teams with urgent asks — the instinct is to
        add people. But sometimes the right answer is to surface the backpressure: make the queue visible,
        slow down the intake, let the urgency signal propagate upstream.
      </p>

      <p>
        I've seen teams burn out because they absorbed every spike without complaint.
        The system looked fine from the outside. It wasn't.
      </p>

      <p>
        Cricket taught me to watch for the quiet between balls. That's where you find out
        what the system is actually capable of.
      </p>

      <span className="signoff">— S</span>
    </PostLayout>
  );
}
