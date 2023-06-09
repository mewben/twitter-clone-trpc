import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input: { id }, ctx }) => {
      const currentUserId = ctx.session?.user.id;
      const profile = await ctx.prisma.user.findUnique({
        where: { id },
        select: {
          name: true,
          image: true,
          _count: {
            select: {
              followers: true,
              followings: true,
              tweets: true,
            },
          },
          followers: !currentUserId
            ? undefined
            : {
                where: {
                  id: currentUserId,
                },
              },
        },
      });

      if (!profile) return;

      console.log("aaa profile", profile);

      return {
        name: profile.name,
        image: profile.image,
        followersCount: profile._count.followers,
        followingsCount: profile._count.followings,
        tweetsCount: profile._count.tweets,
        isFollowing: profile.followers?.length > 0,
      };
    }),
});
